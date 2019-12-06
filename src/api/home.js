import {HttpGet}  from './index'

export  const  getList = (params) => HttpGet('/toutiao/index',params);

export  const  getList1 = (params) => HttpGet('',params);