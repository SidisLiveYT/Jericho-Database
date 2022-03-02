const fileSystem = require('fs')

class cacheUtils {
  static #defaultCredentials = {
    directory: '../cache/',
    file: '__solidCache.txt',
  }
  static async __rawFunctions(
    method = 'write',
    directoryPath = cacheUtils.#defaultCredentials?.directory,
    filePath = cacheUtils.#defaultCredentials?.file,
    filters,
  ) {
    let __cacheLocation = directoryPath + filePath
    switch (method?.toLowerCase()?.trim()) {
      case 'write':
        if (!filters?.writeData)
          throw new Error('Error Number : 097 -> Invalid Buffer Detected')
        fileSystem.writeFileSync(__cacheLocation)
      default:
        return undefined
    }
  }
}

module.exports = cacheUtils
