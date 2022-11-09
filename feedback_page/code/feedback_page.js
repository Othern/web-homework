function pageload(){
    document.getElementById("submit").onclick = submit;
    document.getElementById("reset").onclick = reset;
}

function AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

function submit(){
    var name = document.getElementById('name');
    var comment = document.getElementById('comment');
    if(name.value.trim() == '' || comment.value.trim() == ''){
        alert('Empty Name/Commet ')
        name.value = '';
        comment.value = '';
    }
    else{
        
        var comment_area = document.getElementById('comment_area');
        var now = new Date();
        var strDateTime = [[AddZero(now.getDate()), 
        AddZero(now.getMonth() + 1), 
        now.getFullYear()].join("/"), 
        [AddZero(now.getHours()), 
        AddZero(now.getMinutes())].join(":"), 
        now.getHours() >= 12 ? "PM" : "AM"].join(" ");

        var date = document.createElement('h3');
        date.className = 'comment_date';
        date.innerHTML = strDateTime;

        var figure = document.createElement('img');
        figure.className = 'comment_figure';
        figure.src = '../image/testpic.png'

        var comment_name = document.createElement('h3');
        comment_name.className = 'comment_name';
        comment_name.innerHTML = name.value;

        var comment_content = document.createElement('p');
        comment_content.className = 'comment_content';
        comment_content.innerHTML = comment.value;
        
        var header= document.createElement('div');
        header.className = 'comment_header';

        var block = document.createElement('div');
        block.className = 'comment_block';
        
        header.appendChild(figure);
        header.appendChild(comment_name);
        header.appendChild(date);
        block.appendChild(header);
        block.appendChild(comment_content);
        block.appendChild(document.createElement('hr'));

        comment_area.appendChild(block);
        name.value = '';
        comment.value = '';
    }
    
}
function reset(){
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
}
window.onload = pageload