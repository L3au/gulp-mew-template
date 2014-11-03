<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{ title }}</title>
</head>
<body>
    <h1>Hello，{{ name }}</h1>

    <h2>Condition</h2>
    {{#if name.length }}
    <p>{{ name }} is a good name</p>
    {{/if}}

    <h2>Array</h2>
    <ul>
    {{#each skills }}
    <li>{{ @index }}. {{ this }}</li>
    {{/each }}
    </ul>
</body>
</html>
