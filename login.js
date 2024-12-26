document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const errBox = document.querySelector('.error');
    const nameInp = document.querySelector('.username');
    const pwdInp = document.querySelector('.pwd');
  
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      let username = nameInp.value;
      let password = pwdInp.value;
      if (!username || !password) return alert('请完整填写表单');
  
      let res = await http.post('/users/login', { username: username, password: password });
  
      if (res.data.code != 1) {
        errBox.style.display = 'block';
        return;
      }
  
      errBox.style.display = 'none';
  
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('uid', res.data.user.id);
      alert('登录成功');
      location.href = './index.html';
    });
  });