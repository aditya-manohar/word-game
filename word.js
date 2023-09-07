var f = document.getElementById('f');
var l = document.getElementById('l');
var a = document.getElementById('a');
var m = document.getElementById('m');
var e = document.getElementById('e');
var s = document.getElementById('s');

var arr = ['f','l','a','m','e','s'];
var complete = [];

var hidden = document.getElementById('hidden')
hidden.style.transition = '.6s';

var completed = document.getElementById('com');
completed.innerHTML = complete.length;

var reload = document.getElementById('reload');
reload.onclick = function()
{
    location.reload();
}

document.getElementById('show').onclick = function()
{

    if(document.getElementById('show').innerHTML == 'Show Words')
    {
    document.getElementById('res').style.display = 'flex';
    document.getElementById('show').innerHTML = 'Hide Words';
    }
    else{
        document.getElementById('res').style.display = 'none';
        document.getElementById('show').innerHTML = 'Show Words';
    }

}


var ans = [ 
    ['f','l','a','m','e'],
    ['f','a','m','e'],
    ['l','a','m','e'],
    ['s','a','m','e'],
    ['m','e','a','l'],
    ['s','a','l','e'],
    ['s','e','a','l'],
    ['l','e','a','f'],
    ['m','a','l','e'],
    ['s','l','a','m']
]

for(var j=0;j<ans.length;j++)
{
    document.getElementById(`${j}`).style.display = 'none';
}

var add = [];
var count = 0;

f.onclick = function()
{
    count++;
    add.push('f');
    f.style.backgroundColor = 'white';

    console.log("count : ",count);
    console.log(add);

    for(var i=0;i<ans.length;i++)
    {
        if(JSON.stringify(ans[i]) == JSON.stringify(add))
        {
            console.log('true');
            console.log("i = ",i);
            console.log(document.getElementById(`${i}`));
            document.getElementById(`li${i}`).style.setProperty("text-decoration","line-through");
            document.getElementById(`${i}`).style.display = 'block';
            complete.push(add);
            completed.innerHTML = complete.length;
            if(complete.length == ans.length)
            {
                location.href = 'celebration.html';
            }
            add = []
            f.style.backgroundColor = 'dodgerblue';
            l.style.backgroundColor = 'dodgerblue';
            a.style.backgroundColor = 'dodgerblue';
            m.style.backgroundColor = 'dodgerblue';
            e.style.backgroundColor = 'dodgerblue';
            s.style.backgroundColor = 'dodgerblue';
        }
    }

    if(add.length > arr.length)
    {
        alert('No word found');
        add = []
        f.style.backgroundColor = 'dodgerblue';
        l.style.backgroundColor = 'dodgerblue';
        a.style.backgroundColor = 'dodgerblue';
        m.style.backgroundColor = 'dodgerblue';
        e.style.backgroundColor = 'dodgerblue';
        s.style.backgroundColor = 'dodgerblue';
    }
}

l.onclick = function()
{
    count++;
    add.push('l');
    l.style.backgroundColor = 'white';

    console.log("count : ",count);
    console.log(add);

    for(var i=0;i<ans.length;i++)
    {
        if(JSON.stringify(ans[i]) == JSON.stringify(add))
        {
            console.log('true');
            console.log("i = ",i);
            console.log(document.getElementById(`${i}`));
            document.getElementById(`li${i}`).style.setProperty("text-decoration","line-through");
            document.getElementById(`${i}`).style.display = 'block';
            complete.push(add);
            completed.innerHTML = complete.length;
            if(complete.length == ans.length)
            {
                location.href = 'celebration.html';
            }
            add = []
            f.style.backgroundColor = 'dodgerblue';
            l.style.backgroundColor = 'dodgerblue';
            a.style.backgroundColor = 'dodgerblue';
            m.style.backgroundColor = 'dodgerblue';
            e.style.backgroundColor = 'dodgerblue';
            s.style.backgroundColor = 'dodgerblue';
        }
    }

    if(add.length > arr.length)
    {
        alert('No word found');
        add = []
        f.style.backgroundColor = 'dodgerblue';
        l.style.backgroundColor = 'dodgerblue';
        a.style.backgroundColor = 'dodgerblue';
        m.style.backgroundColor = 'dodgerblue';
        e.style.backgroundColor = 'dodgerblue';
        s.style.backgroundColor = 'dodgerblue';
    }
}

a.onclick = function()
{
    count++;
    add.push('a');
    a.style.backgroundColor = 'white';

    console.log("count : ",count);
    console.log(add);

    for(var i=0;i<ans.length;i++)
    {
        if(JSON.stringify(ans[i]) == JSON.stringify(add))
        {
            console.log('true');
            console.log("i = ",i);
            console.log(document.getElementById(`${i}`));
            document.getElementById(`li${i}`).style.setProperty("text-decoration","line-through");
            document.getElementById(`${i}`).style.display = 'block';
            complete.push(add);
            completed.innerHTML = complete.length;
            if(complete.length == ans.length)
            {
                location.href = 'celebration.html';
            }
            add = []
            f.style.backgroundColor = 'dodgerblue';
            l.style.backgroundColor = 'dodgerblue';
            a.style.backgroundColor = 'dodgerblue';
            m.style.backgroundColor = 'dodgerblue';
            e.style.backgroundColor = 'dodgerblue';
            s.style.backgroundColor = 'dodgerblue';
        }
    }

    if(add.length > arr.length)
    {
        alert('No word found');
        add = []
        f.style.backgroundColor = 'dodgerblue';
        l.style.backgroundColor = 'dodgerblue';
        a.style.backgroundColor = 'dodgerblue';
        m.style.backgroundColor = 'dodgerblue';
        e.style.backgroundColor = 'dodgerblue';
        s.style.backgroundColor = 'dodgerblue';
    }
}

m.onclick = function()
{
    count++;
    add.push('m');
    m.style.backgroundColor = 'white';

    console.log("count : ",count);
    console.log(add);

    for(var i=0;i<ans.length;i++)
    {
        if(JSON.stringify(ans[i]) == JSON.stringify(add))
        {
            console.log('true');
            console.log("i = ",i);
            console.log(document.getElementById(`${i}`));
            document.getElementById(`li${i}`).style.setProperty("text-decoration","line-through");
            document.getElementById(`${i}`).style.display = 'block';
            complete.push(add);
            completed.innerHTML = complete.length;
            if(complete.length == ans.length)
            {
                location.href = 'celebration.html';
            }
            add = []
            f.style.backgroundColor = 'dodgerblue';
            l.style.backgroundColor = 'dodgerblue';
            a.style.backgroundColor = 'dodgerblue';
            m.style.backgroundColor = 'dodgerblue';
            e.style.backgroundColor = 'dodgerblue';
            s.style.backgroundColor = 'dodgerblue';
        }
    }

    if(add.length > arr.length)
    {
        alert('No word found');
        add = []
        f.style.backgroundColor = 'dodgerblue';
        l.style.backgroundColor = 'dodgerblue';
        a.style.backgroundColor = 'dodgerblue';
        m.style.backgroundColor = 'dodgerblue';
        e.style.backgroundColor = 'dodgerblue';
        s.style.backgroundColor = 'dodgerblue';
    }
}

e.onclick = function()
{
    count++;
    add.push('e');
    e.style.backgroundColor = 'white';

    console.log("count : ",count);
    console.log(add);

    for(var i=0;i<ans.length;i++)
    {
        if(JSON.stringify(ans[i]) == JSON.stringify(add))
        {
            console.log('true');
            console.log("i = ",i);
            console.log(document.getElementById(`${i}`));
            document.getElementById(`li${i}`).style.setProperty("text-decoration","line-through");
            document.getElementById(`${i}`).style.display = 'block';
            complete.push(add);
            completed.innerHTML = complete.length;;
            if(complete.length == ans.length)
            {
                location.href = 'celebration.html';
            }
            add = []
            f.style.backgroundColor = 'dodgerblue';
            l.style.backgroundColor = 'dodgerblue';
            a.style.backgroundColor = 'dodgerblue';
            m.style.backgroundColor = 'dodgerblue';
            e.style.backgroundColor = 'dodgerblue';
            s.style.backgroundColor = 'dodgerblue';
        }
    }

    if(add.length > arr.length)
    {
        alert('No word found');
        add = []
        f.style.backgroundColor = 'dodgerblue';
        l.style.backgroundColor = 'dodgerblue';
        a.style.backgroundColor = 'dodgerblue';
        m.style.backgroundColor = 'dodgerblue';
        e.style.backgroundColor = 'dodgerblue';
        s.style.backgroundColor = 'dodgerblue';
    }
}

s.onclick = function()
{
    count++;
    add.push('s');
    s.style.backgroundColor = 'white';

    console.log("count : ",count);
    console.log(add);

    for(var i=0;i<ans.length;i++)
    {
        if(JSON.stringify(ans[i]) == JSON.stringify(add))
        {
            console.log('true');
            console.log("i = ",i);
            console.log(document.getElementById(`${i}`));
            document.getElementById(`li${i}`).style.setProperty("text-decoration","line-through");
            document.getElementById(`${i}`).style.display = 'block';
            complete.push(add);
            completed.innerHTML = complete.length;;
            if(complete.length == ans.length)
            {
                location.href = 'celebration.html';
            }
            add = []
            f.style.backgroundColor = 'dodgerblue';
            l.style.backgroundColor = 'dodgerblue';
            a.style.backgroundColor = 'dodgerblue';
            m.style.backgroundColor = 'dodgerblue';
            e.style.backgroundColor = 'dodgerblue';
            s.style.backgroundColor = 'dodgerblue';
        }
    }
    
    if(add.length > arr.length)
    {
        alert('No word found');
        add = []
        f.style.backgroundColor = 'dodgerblue';
        l.style.backgroundColor = 'dodgerblue';
        a.style.backgroundColor = 'dodgerblue';
        m.style.backgroundColor = 'dodgerblue';
        e.style.backgroundColor = 'dodgerblue';
        s.style.backgroundColor = 'dodgerblue';
    }
}
console.log(ans);
console.log(ans.length)
