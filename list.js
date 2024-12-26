let PageTotal;
let firstBtn = document.querySelector('.first');
let endBtn = document.querySelector('.end');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let totalEle = document.querySelector('.total');
let selBtn = document.querySelector('.select');
let jumpnumber = document.querySelector('.jump');
let jumpBtn = document.querySelector('.jump1');
let ulBox = document.querySelector('ul');
const queryObj = {
  current: 1,
  pagesize: 12,
}
// 获得购物车数据
async function getData() {
  // 获得第一页开始的12条购物车内容
  let res = await http.get('/goods/list', { params: queryObj })
  r = res.data.list;
  
  // 查看总页数
  PageTotal = res.data.total;
  
  let htmlStr = ''
  r.forEach(function(item) {
    htmlStr += `
    <li>
    <img src="${item.img_big_logo}" alt="">
    <p class="title">${item.title}</p>
    <div class="info">
      <p>￥ ${item.current_price}</p>
      <p>￥ ${item.price}</p>
    </div>
  </li>`
  })
  
  ulBox.innerHTML = htmlStr;
  totalEle.innerHTML = `${queryObj.current}/${PageTotal}`
}

getData()

// 点击首页
firstBtn.onclick = function () {
  if (queryObj.current == 1) return;
  queryObj.current = 1;
  getData();
}

// 点击末页
endBtn.onclick = function () {
  queryObj.current = PageTotal;
  getData();
}

// 点击下一页事件
nextBtn.onclick = function () {
  if (queryObj.current == PageTotal) return;
  queryObj.current++;
  getData()
}

// 点击上一页事件
prevBtn.onclick = function () {
  if (queryObj.current == 1) return;
  queryObj.current--;
  getData();
}

// 跳转页数事件
jumpBtn.onclick = function () {
  queryObj.current = parseInt(jumpnumber.value);
  getData();
  if (queryObj.current > PageTotal) {
    alert('超出最大页数');
    queryObj.current = PageTotal;
    getData();
    jumpnumber.value = PageTotal;
  }
}

// 选择每页显示数量
selBtn.onchange = function () {
  queryObj.pagesize = selBtn.value;
  PageTotal = Math.ceil(PageTotal / queryObj.pagesize);
  queryObj.current = 1;
  getData();
  jumpnumber.value = ''
}

ulBox.onclick = async function(e){
  if(e.target.tagName == 'IMG'){
    let res = await http.get('/goods/list', { params: queryObj })
    let r = res.data.list;
    r.forEach(function(item){
      if(e.target.src == item.img_big_logo)
      {   
        localStorage.setItem('goods_id', item.goods_id);
        location.href = "./goods.html"
      }
    })
  }
}