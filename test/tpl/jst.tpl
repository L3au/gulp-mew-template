<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{= title}}</title>
</head>
<body>
    <h1>Hello，{{= it.name}}</h1>

    <h2>Condition</h2>
    {{ if (it.name.length) { }}
    <p>{{= name }} is a good name</p>
    {{ } }}

    <h2>Array</h2>
    <ul>
    {{ for (var i = 0; i < it.skills.length; i++) { }}
    <li>{{= i }}. {{= it.skills[i] }}</li>
    {{ } }}
    </ul>
</body>
</html>
