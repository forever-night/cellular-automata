function getRuleArray() {
    var rules = parseRuleToBinary();

    for (var i = 0; i < rules.length; i++)
        rules[i] = parseInt(rules[i]);


    while (rules.length < 8)
        rules.push(0);

    return rules;
}


function parseRuleToBinary() {
    var ruleString = document.getElementById("txtRule").value;
    ruleString = parseInt(ruleString).toString(2);

    var rules = ruleString.split("");
    rules.reverse();

    return rules;
}