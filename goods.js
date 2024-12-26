let ulBox = document.querySelector('ul')

let goods_id = localStorage.getItem('goods_id')
async function getGoodsDetail() {
  let res = await http.get('/goods/item', { params: { id: goods_id } })
  console.log(res);

  // info里面存储着商品的详细信息
  let item = res.data.info
  let htmlStr = ''

   htmlStr += `
    <li>
    <img src="${item.img_big_logo}" alt="">
    <div class="right">
    <p class="title">${item.title}</p>
    <div class="info">
      <p ><span>原价:￥</span><span class="price1">${item.price}</span></p>
      <p><span>折扣:  </span><span class="sale_type">${item.sale_type = item.sale_type == '100%' ? '无折扣' : parseInt(item.sale_type) / 10 + '折'}</span></p>
      <p><span>现价:￥${item.current_price}</span></p>
    </li>
    </div>
    ${res.data.info.goods_introduce}
    </div>
    `
  ulBox.innerHTML = htmlStr
}
getGoodsDetail();