;
function resolveHtml(res){
     let reshtml = `
 <div class="container">
                                            <div class="row">
                                                <img class="mb-3 rounded-circle shadow m-auto"
                                                     src="/static/img/user_icon.jpg"
                                                     alt="Logo" width="72" height="72"></div>
                                            <div class="row mt-2">
                                                <ul class="list-group">
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-person" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>

                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">
                                                            <span>姓名:</span><span> ${res.data.username} </span>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-building" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M15.285.089A.5.5 0 0 1 15.5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .418-.493l5.582-.93V3.5a.5.5 0 0 1 .324-.468l8-3a.5.5 0 0 1 .46.057zM7.5 3.846V8.5a.5.5 0 0 1-.418.493l-5.582.93V15h8v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.222l-7 2.624z"/>
                                                                <path fill-rule="evenodd" d="M6.5 15.5v-7h1v7h-1z"/>
                                                                <path d="M2.5 11h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h1v1h-1v-1zm6-10h1v1h-1V3zm2 0h1v1h-1V3zm-4 2h1v1h-1V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm-2 2h1v1h-1V7zm2 0h1v1h-1V7zm-4 0h1v1h-1V7zm0 2h1v1h-1V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">
                                                            单位 :<span> ${res.data.company} </span>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-phone" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                                                <path fill-rule="evenodd"
                                                                      d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">
                                                            电话号码：<span> ${res.data.phoneNumber} </span>
                                                        </div>
                                                    </li>

                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-envelope-fill" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">
                                                            电子邮件: <span> ${res.data.email} </span>
                                                        </div>
                                                    </li>

                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">

                                                            <svg class="bi bi-blockquote-left" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm5 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                                                <path d="M3.734 6.352a6.586 6.586 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299 1.38 1.38 0 0 0-.252.369c-.058.129-.1.295-.123.498h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.503.21-.336 0-.577-.108-.721-.327C2.072 8.619 2 8.328 2 7.969c0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352zm2.168 0a6.588 6.588 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299c-.113.12-.199.246-.257.375a1.75 1.75 0 0 0-.118.492h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.504.21-.335 0-.576-.108-.72-.327-.145-.223-.217-.514-.217-.873 0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">

                                                            备注:<span> ${res.data.backup} </span>
                                                        </div>
                                                    </li>

                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">

                                                            <svg class="bi bi-house" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                                                <path fill-rule="evenodd"
                                                                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">

                                                            家庭住址：<span> ${res.data.address} </span>
                                                        </div>
                                                    </li>

                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-calendar-check" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                                <path fill-rule="evenodd"
                                                                      d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
                                                                <path fill-rule="evenodd"
                                                                      d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">

                                                            生日:<span>${ res.data.birthDay}</span>
                                                        </div>
                                                    </li>

                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-music-player-fill" width="1em"
                                                                 height="1em" viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3zm7 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                                <circle cx="8" cy="11" r="1"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">
                                                            电话铃声:<span>${ res.data.phoneMusic}</span>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>`
    return reshtml
}

function resolveHtmlAlter(res){
    let resAlthtml = `      <div class="container">
                                            <div class="row">
                                                <img class="mb-3 rounded-circle shadow m-auto"
                                                     src="/static/img/user_icon.jpg "
                                                     alt="Logo" width="72" height="72"></div>
                                            <div class="row mt-2">
                                                <ul class="list-group">
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-person" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>

                                                            </svg>

                                                        </div>
                                                        <div class="col-md-10">
                                                            <input type="text" class="form-control nameInput"
                                                                   placeholder="姓名" value=" ${res.data.username}">
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-building" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M15.285.089A.5.5 0 0 1 15.5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .418-.493l5.582-.93V3.5a.5.5 0 0 1 .324-.468l8-3a.5.5 0 0 1 .46.057zM7.5 3.846V8.5a.5.5 0 0 1-.418.493l-5.582.93V15h8v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.222l-7 2.624z"/>
                                                                <path fill-rule="evenodd" d="M6.5 15.5v-7h1v7h-1z"/>
                                                                <path d="M2.5 11h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h1v1h-1v-1zm6-10h1v1h-1V3zm2 0h1v1h-1V3zm-4 2h1v1h-1V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm-2 2h1v1h-1V7zm2 0h1v1h-1V7zm-4 0h1v1h-1V7zm0 2h1v1h-1V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">
                                                            <input type="text" class="form-control companyInput" value="${res.data.company}"
                                                                   placeholder="单位">
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-phone" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                                                <path fill-rule="evenodd"
                                                                      d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">
                                                            <input type="text" class="form-control phoneInput" value="${res.data.phoneNumber}" name="${res.data.id}"
                                                                   placeholder="电话号码">
                                                        </div>
                                                    </li>

                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-envelope-fill" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">
                                                            <input type="email" class="form-control emailInput" value=" ${res.data.email}"
                                                                   placeholder="电子邮件">
                                                        </div>
                                                    </li>

                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">

                                                            <svg class="bi bi-blockquote-left" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm5 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                                                                <path d="M3.734 6.352a6.586 6.586 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299 1.38 1.38 0 0 0-.252.369c-.058.129-.1.295-.123.498h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.503.21-.336 0-.577-.108-.721-.327C2.072 8.619 2 8.328 2 7.969c0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352zm2.168 0a6.588 6.588 0 0 0-.445.275 1.94 1.94 0 0 0-.346.299c-.113.12-.199.246-.257.375a1.75 1.75 0 0 0-.118.492h.282c.242 0 .431.06.568.182.14.117.21.29.21.521a.697.697 0 0 1-.187.463c-.12.14-.289.21-.504.21-.335 0-.576-.108-.72-.327-.145-.223-.217-.514-.217-.873 0-.254.055-.485.164-.692.11-.21.242-.398.398-.562.16-.168.33-.31.51-.428.18-.117.33-.213.451-.287l.211.352z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">

                                                            <input type="text" class="form-control backupInput" value=" ${res.data.backup}"
                                                                   placeholder="备注">
                                                        </div>
                                                    </li>

                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">

                                                            <svg class="bi bi-house" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                                                <path fill-rule="evenodd"
                                                                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">

                                                            <input type="text" class="form-control addressInput" value=" ${res.data.address}"
                                                                   placeholder="家庭住址">
                                                        </div>
                                                    </li>

                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-calendar-check" width="1em" height="1em"
                                                                 viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                                                <path fill-rule="evenodd"
                                                                      d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
                                                                <path fill-rule="evenodd"
                                                                      d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">

                                                            <input type="date" class="form-control birthInput" value="${ res.data.birthDay }"
                                                                   placeholder="生日">
                                                        </div>
                                                    </li>

                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <div class="col-md-1">
                                                            <svg class="bi bi-music-player-fill" width="1em"
                                                                 height="1em" viewBox="0 0 16 16" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd"
                                                                      d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3zm7 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                                <circle cx="8" cy="11" r="1"/>
                                                            </svg>
                                                        </div>
                                                        <div class="col-md-10">
                                                            <input type="text" class="form-control musicInput"  value="${res.data.phoneMusic }"
                                                                   placeholder="铃声">
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>`
    return resAlthtml
}

function isPhoneNum(str) {
                return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str)
            }

let alterId = undefined
let deleteId = undefined


const index_ops = {
    init: function () {
        this.eventBind();
    },
    eventBind: function () {
        //查询
        $(".infoHref").click(function () {
            let id = $(this).attr('href').split('?')[1]
            $.ajax({
                url: "/info",
                type: "GET",
                data: {
                    id: id,
                },
                dataType: "json",
                success: function (res) {
                    if (res.code == 200) {
                        var dtailHtml = resolveHtml(res)
                        $('.infoModelBody').html(dtailHtml)
                    }
                    if (res.code == -1) {
                        alert("404")
                    }
                }
            });
        });

        // 修改
        $(".alterHref").click(function () {
              //监听并替换
            let id = $(this).attr('href').split('?')[1]
            alterId = id
            $(this).addClass("tmp");
            tmpaj = $.ajax({
                url: "/info",
                type: "GET",
                data: {
                    id: id,
                },
                dataType: "json",
                success: function (res) {
                    if (res.code == 200) {
                        //请求数据
                        console.log(res)
                        let dtailHtml = resolveHtmlAlter(res)
                        $('.tmp ~ div .alterModelBody').html(dtailHtml)
                    }
                    if (res.code == -1) {
                        alert("404")
                    }
                }
            });
            $.when(tmpaj).done(function () {
                $(".tmp").removeClass("tmp");
              });

        });


        //修改保存
        $(".alterSave").click(function () {
             var username = $(".nameInput").val().trim();
             var company = $(".companyInput").val().trim();
             var phoneNumber = $(".phoneInput").val().trim();
             //遇到一个问题: 此时的phoneNumber 是空，按道理说 ajax 也应该是空，但是!但是ajax里面的居然不是空!!!
             if (phoneNumber != ""){
                    if (!isPhoneNum(phoneNumber))
                    {
                        alert("手机号码输入不正确！")
                        return 0;
                    };
             }else{
                 alert("请输入手机号")
             }

            var email = $(".emailInput").val().trim();
            var backup = $(".backupInput").val().trim();
            var address = $(".addressInput").val().trim();
            var birthDay = $(".birthInput").val().trim();
            var phoneMusic = $(".musicInput").val().trim();
            $.ajax({
                url: "/alter",
                type: "GET",
                data: {
                    id:alterId,
                    username:username,
                    company:company,
                    phoneNumber:phoneNumber,email:email,backup:backup,address:address,birthDay:birthDay,phoneMusic:phoneMusic
                },
                dataType: "json",
                success: function (res) {
                    if (res.code == 200) {
                        window.location.href = "/"
                    }
                    if (res.code == -1) {
                        alert("修改失败")
                    }
                }
            });
        });
        //删除
        $(".deleteHref").click(function(){
            var id = $(this).attr('href').split('?')[1]
            deleteId = id
        })
        $(".deleteDetermine").click(function (){
            if (deleteId){
                $.ajax({
                url: "/delete",
                type: "GET",
                data: {
                    id:deleteId,
                },
                dataType: "json",
                success: function (res) {
                    if (res.code == 200) {
                      window.location.href = "/"
                    }
                    if (res.code == -1) {
                        alert("删除失败")
                    }
                }
            });
            }else {
                alterId("没有找到该数据!请重试")
            }
        })

        //添加
        $(".addDetermine").click(function (){
            var username = $("#nameAddInput").val().trim();
             var company = $("#companyAddInput").val().trim();
             var phoneNumber = $("#phoneAddInput").val().trim();
             var email = $("#emailAddInput").val().trim();
             var backup = $("#backupAddInput").val().trim();
             var address = $("#addressAddInput").val().trim();
             var birthDay = $("#birthAddInput").val().trim();
             var phoneMusic = $("#musicAddInput").val().trim();
             if( username=="" && company == "" && phoneNumber == "" && email == "" && backup == "" && address=="" && birthDay == "" && phoneMusic ==""){
               alert("请输入数据")
               return
             }
            if (phoneNumber != ""){
                    if (!isPhoneNum(phoneNumber))
                    {
                        $("#phoneAddInput").val("")
                        alert("手机号码输入不正确！")
                        return
                    };
             }

                $.ajax({
                url: "/add",
                type: "GET",
                data: {
                    username:username,
                    company:company,
                    phoneNumber:phoneNumber,email:email,backup:backup,address:address,birthDay:birthDay,phoneMusic:phoneMusic
                },
                dataType: "json",
                success: function (res) {
                    if (res.code == 200) {
                      window.location.href = "/?p=1"
                    }
                    if (res.code == -1) {
                        alert("添加失败")
                    }
                }
            });
        })
    }
};

index_ops.init();
