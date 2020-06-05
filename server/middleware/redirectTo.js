// 301redirect
export default function (req, res, next) {
  let req_host= req.header('host');
  let req_path = req.path;

  let whiteList = [
    'localhost:3000',
    'localhost:3001',
    '172.25.6.61:3000',
    '192.168.0.0/24',
    '10.0.0.0/8',
    '10.0.0.0/8',
    '172.16.0.0/16',
    'www.171tiyu.com',
    '171tiyu.com',
    's.171tiyu.com',
    'sm.171tiyu.com',
    'sl.171tiyu.com',
    'slm.171tiyu.com'
  ];
  console.log(process.env.NODE_ENV);
  // console.log(req_host);
  // console.log('redirect');
  if (whiteList.find(item=>item === req_host)){

    // PRODUCTION
    if (req_host === '171tiyu.com' || req_host === 's.171tiyu.com' || req_host==='sl.171tiyu.com' ){
      // console.log('0000')
      let new_host = 'http://www.171tiyu.com'+req_path;
      res.writeHead(301, { Location: new_host});
      res.end();
    }else{
      next();
    }
  }else{
    // next();
    // res.writeHead('404','页面不存在');
    res.end();
  }


}