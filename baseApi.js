// @flow
import axios from 'axios'
import url from 'url'
import { merge as _merge } from 'lodash'
import _ from 'lodash'

function baseAxios(options) {

   var token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDNlZTM4MTBjMTU2YzcxMTE3NWI1MTVhZDY4Y2M2ODFiZmY2MTllMWMyMTVmYWQzYzFlM2I2ZTFmZjA3MmZlZmQ4MmFjNjJmOTFhYjUyMGMiLCJpYXQiOjE2MjYwMzMwMDcsIm5iZiI6MTYyNjAzMzAwNywiZXhwIjoxNjU3NTY5MDA3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.HmeH2g33zvtxnHq3fLcQ_3Rk0zFWdUkkoqsf-FFozmAXC4lajm9IvdgHpm2-QnoGxju-syAeL4vL0nEdhEdYCFpAQoC6hT-xPELky9VAms4642BOM3lopcRynJ0buOA9LymTdeER_00WgS9ytjTzbd291XCkxksAcVoDNqQPno1gkznkJJzsiLZ96uDltZ7NibdZa9XjN_WB1l99fiJpzHt5KB0o4CmmDRjf3CLqjJCcdXCos3DjCCMmlzcA1jF8GCwO4PyW3bvelBc1-zewJ2OafT9TnY_zwJbw90m8wd2SDeBByIhrL-wOn5BKK43XZ1LzJxChvi2IPO8ZkHpNZRwKRiw-8OEKW0EqJw3lobPWs3GpvKcJf5NVCvfpE0uUZSHrR0MyakJ8Xd00p0o5TuaqjWv-RuYRq3dKCuEPY9nrI_1kytbzfLr0el4KoBd-liQvWUjLe4wgBQdCSeGk0tnp5-eUGU5D9Jh4a7LEb1Xxz5QBzYIv2kAkEOzoaTQfDTobGfX0YFhp-IM7k7HzjOeSWIu-hvHHpTVYAR_4adIRym_VSeYV9LGJxRGb2bU8q7Nkr3X_dfpZzffjRForXS5SDHM5Yc0pDwql2EhB7_SbbyS9_uHaaA6R11FScVaLIaPlMBwePGdakQPJ7XoBgTFi1LJu5EsbXl5NITHgyP8';
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+token
  }

  return axios.create({
    baseURL: url.format('http://bankjaal.in/'),
    timeout: options.timeout || 30000,
    headers: defaultHeaders,
  })
}

function executeRequest(method, pathname, data, options = {}) {
  const body = method === 'get' || !data ? {} : { data }
  const reqObj = { method, url: pathname, params: options.query, ...body }
  console.log(reqObj);
  const baseAxiosRequest = baseAxios(options)
  return new Promise((resolve, reject) => {
    return baseAxiosRequest
      .request(reqObj)
      .then(res => {
        console.log(res.data);
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default {
  get(pathname, options) {
    return executeRequest('get', pathname, null, options)
  },

  post(pathname, data, options) {
    return executeRequest('post', pathname, data, options)
  },

  put(pathname, data, options) {
    return executeRequest('put', pathname, data, options)
  },

  delete(pathname, data, options) {
    return executeRequest('delete', pathname, data, options)
  },

  all(promises) {
    return axios.all(promises)
  },
}
