const form = document.querySelector('form');
const oldPassword = document.querySelector('.oldPassword');
const newPassword = document.querySelector('.newPassword');
const rNewPassword = document.querySelector('.rNewPassword');

async function pwd() {
  if (oldPassword.value === '' || newPassword.value === '' || rNewPassword.value === '') {
    alert('请填写完整信息');
    return;
  }
  if (newPassword.value !== rNewPassword.value) {
    alert('两次密码不一致');
    return;
  }
  let id = localStorage.getItem('uid');
  let res = await http.post('/users/rpwd', { id: id, oldPassword: oldPassword.value, newPassword: newPassword.value, rNewPassword: rNewPassword.value });
  console.log(res.data.code);
  if (res.data.code == 1) {
    alert(res.data.message);
    location.href = './login.html'; // 确保登录页面的路径正确
  } else {
    alert(res.data.message);
  }
}

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  await pwd();
});