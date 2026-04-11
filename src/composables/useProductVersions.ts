import { ref } from 'vue'

/**
 * 产品版本管理 Composable
 * 从各产品的 API 获取最新版本号
 * 包含缓存和防抖优化
 */

interface VersionData {
  xl: string
  lx: string
  pml: string
  zl: string
}

interface ChangelogData {
  [version: string]: any
}

// 全局缓存
const versionCache = {
  data: null as VersionData | null,
  timestamp: 0,
  ttl: 5 * 60 * 1000 // 5分钟缓存
}

let fetchPromise: Promise<void> | null = null

export const useProductVersions = () => {
  const versions = ref<VersionData>({
    xl: 'v1.5.5',  // 默认值
    lx: 'v2.3.0',  // 默认值
    pml: 'v2.1.0',  // 默认值
    zl: 'v1.8'  // 默认值
  })

  const loading = ref(false)
  const error = ref<string | null>(null)

  // 检查缓存是否有效
  const isCacheValid = (): boolean => {
    return versionCache.data !== null && 
           (Date.now() - versionCache.timestamp) < versionCache.ttl
  }

  // 从缓存加载
  const loadFromCache = (): boolean => {
    if (isCacheValid() && versionCache.data) {
      versions.value = { ...versionCache.data }
      return true
    }
    return false
  }

  // 保存到缓存
  const saveToCache = (data: VersionData): void => {
    versionCache.data = { ...data }
    versionCache.timestamp = Date.now()
  }

  // 从 XL 的 changelog API 获取最新版本
  const fetchXLVersion = async (): Promise<string> => {
    try {
      const response = await fetch('https://check.yealqp.cn/changelog.json')
      if (!response.ok) throw new Error('Failed to fetch XL changelog')
      
      const data: { data: ChangelogData } = await response.json()
      if (!data.data) throw new Error('Invalid XL changelog data')
      
      // 获取所有版本号并排序
      const versionNumbers = Object.keys(data.data).sort((a, b) => {
        const v1Parts = a.split('.').map(num => parseInt(num) || 0)
        const v2Parts = b.split('.').map(num => parseInt(num) || 0)
        
        for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
          const v1 = v1Parts[i] || 0
          const v2 = v2Parts[i] || 0
          if (v1 !== v2) return v2 - v1
        }
        return 0
      })
      
      return versionNumbers.length > 0 ? `v${versionNumbers[0]}` : 'v1.5.5'
    } catch (err) {
      console.error('获取 XL 版本失败:', err)
      return 'v1.5.5'
    }
  }

  // 从 PML 的 changelog API 获取最新版本
  const fetchPMLVersion = async (): Promise<string> => {
    try {
      const response = await fetch('https://api.rycb.mxj.pub/api/changelog')
      if (!response.ok) throw new Error('Failed to fetch PML changelog')
      
      const data: { success: boolean; data: ChangelogData } = await response.json()
      if (!data.success || !data.data) throw new Error('Invalid PML changelog data')
      
      // 获取所有版本号并排序
      const versionNumbers = Object.keys(data.data).sort((a, b) => {
        const v1Parts = a.split('.').map(num => parseInt(num) || 0)
        const v2Parts = b.split('.').map(num => parseInt(num) || 0)
        
        for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
          const v1 = v1Parts[i] || 0
          const v2 = v2Parts[i] || 0
          if (v1 !== v2) return v2 - v1
        }
        return 0
      })
      
      return versionNumbers.length > 0 ? `v${versionNumbers[0]}` : 'v2.1.0'
    } catch (err) {
      console.error('获取 PML 版本失败:', err)
      return 'v2.1.0'
    }
  }

  // LX 暂时没有 API，使用硬编码
  const fetchLXVersion = async (): Promise<string> => {
    // TODO: 如果 LX 有 API，在这里实现
    return 'v2.3.0'
  }

  // ZL (ZNext Launcher) 暂时没有 API，使用硬编码
  const fetchZLVersion = async (): Promise<string> => {
    // TODO: 如果 ZL 有 API，在这里实现
    return 'v1.8'
  }

  // 获取所有产品的版本号（带缓存和防抖）
  const fetchAllVersions = async () => {
    // 先尝试从缓存加载
    if (loadFromCache()) {
      return
    }

    // 如果已经有请求在进行中，等待它完成
    if (fetchPromise) {
      return fetchPromise
    }

    if (loading.value) return
    
    loading.value = true
    error.value = null

    fetchPromise = (async () => {
      try {
        const [xlVersion, lxVersion, pmlVersion, zlVersion] = await Promise.all([
          fetchXLVersion(),
          fetchLXVersion(),
          fetchPMLVersion(),
          fetchZLVersion()
        ])

        const newVersions = {
          xl: xlVersion,
          lx: lxVersion,
          pml: pmlVersion,
          zl: zlVersion
        }

        versions.value = newVersions
        saveToCache(newVersions)
      } catch (err) {
        console.error('获取版本号失败:', err)
        error.value = '获取版本号失败'
      } finally {
        loading.value = false
        fetchPromise = null
      }
    })()

    return fetchPromise
  }

  // 获取单个产品的版本号
  const getVersion = (productId: 'xl' | 'lx' | 'pml' | 'zl'): string => {
    return versions.value[productId]
  }

  // 清除缓存
  const clearCache = (): void => {
    versionCache.data = null
    versionCache.timestamp = 0
  }

  return {
    versions,
    loading,
    error,
    fetchAllVersions,
    getVersion,
    clearCache
  }
}
