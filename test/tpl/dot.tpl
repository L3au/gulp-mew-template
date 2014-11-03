<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title><%= it.title %></title>
</head>
<body>
    <h1>Hello，<%= it.name %></h1>

    <h2>Condition</h2>
    <%? it.name.length %>
    <p><%= it.name %> is a good name</p>
    <%? %>

    <h2>Array</h2>
    <ul>
    <%~ it.skills :val:idx%>
    <li><%= idx %>. <%= val %></li>
    <%~ %>
    </ul>
</body>
</html>
