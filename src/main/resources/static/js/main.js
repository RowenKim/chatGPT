$(document).ready(function (){
    $("#send_btn").click(()=>{
        var question_html = "";
        var question_info = $("#question_info").val();
        $("#question_info").val("");
        question_html += '<li class="d-flex justify-content-between mb-4 row">'
        question_html += '    <div class="card col-xl-11">'
        question_html += '        <div class="card-header d-flex justify-content-between p-3">'
        question_html += '            <p class="fw-bold mb-0">Me</p>'
        question_html += '        </div>'
        question_html += '        <div class="card-body">'
        question_html += '            <p class="mb-0">'
        question_html += '                ' + question_info
        question_html += '            </p>'
        question_html += '        </div>'
        question_html += '    </div>'
        question_html += '    <div class="col-xl-1" style="margin-top: 15px;">'
        question_html += '        <i class="fa-regular fa-face-smile fa-xl"></i>'
        question_html += '    </div>'
        question_html += '</li>'

        // 기존에 있는 ui 태그에 append
        $("#chatGPTChatRoom").append(question_html);

        // ChatGPT API 실행.
        $.ajax({
            url:"/connectChatGPT",
            type: "POST",
            data:{
                question : question_info
            },
            success: function(data){
                var answer_html = "";
                answer_html += '<li class="d-flex justify-content-between mb-4 row">'
                answer_html += '    <div class="col-xl-1" style="margin-top: 15px; padding: 0px; width:90px;">'
                answer_html += '        <i class="fa-solid fa-robot fa-xl"></i>'
                answer_html += '    </div>'
                answer_html += '    <div class="card col-xl-11" style="padding: 0px;">'
                answer_html += '        <div class="card-header d-flex justify-content-between p-3">'
                answer_html += '            <p class="fw-bold mb-0">ChatGPT</p>'
                answer_html += '        </div>'
                answer_html += '        <div class="card-body">'
                answer_html += '            <p class="mb-0">'
                answer_html += '                ' + data
                answer_html += '            </p>'
                answer_html += '        </div>'
                answer_html += '    </div>'
                answer_html += '</li>'

                // 기존에 있는 ui 태그에 답변 내용 append
                $("#chatGPTChatRoom").append(answer_html);
            }
        })
    })
});