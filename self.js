document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userInfoForm');
    const nameInp = document.querySelector('.username');
    const ageSel = document.querySelector('.age');
    const genderSel = document.querySelector('select[name="gender"]');
    const nickInp = document.querySelector('.nickname');
    let id; // 将 id 定义为全局变量

    async function loadUserInfo() {
      let { status, info } = await isLogin();
      if (status != 1) {
         location.href = './login.html';
          return;
      }
      nameInp.value = info.username;
      ageSel.value = info.age || '';
      genderSel.value = info.gender || 'choose';
      nickInp.value = info.nickname || '';
      id = info.id; // 将 id 赋值给全局变量
    }

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      let data = {
        id: id,
        age: ageSel.value !== '' ? parseInt(ageSel.value) : undefined,
        gender: genderSel.value !== 'choose' ? genderSel.value : undefined,
        nickname: nickInp.value.trim() !== '' ? nickInp.value : undefined
      };

      try {
        let response = await http.post('/users/update', data, {
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        if (response.data.code == 1) {
          alert('修改成功');
          location.href = './index.html';
        } else {
          alert('修改失败: ' + response.data.message);
        }
      } catch (error) {
        console.error('更新用户信息失败:', error);
        alert('更新用户信息时发生错误，请稍后重试。');
      }
    });

    loadUserInfo();
});