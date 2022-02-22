export const linesOfCode = [
    {
        line: 1,
        text: "var maximumWealth = function(accounts) {",
        indent: false
    },

    {
        line: 2,
        text: "balances = []",
        indent: false
    },

    {
        line: 3,
        text: "accounts.forEach((account, index) => {",
        indent: false
    },

    {
        line: 4,
        text: "let account_sum = 0 ",
        indent: true
    },

    {
        line: 5,
        text: "account.forEach((elem, index) => {",
        indent: false
    },

    {
        line: 6,
        text: "account_sum += elem",
        indent: true
    },

    {
        line: 7,
        text: "})",
        indent: false
    },

    {
        line: 8,
        text: "balances.push(account_sum)",
        indent: false
    },
    
    {
        line: 9,
        text: "})",
        indent: false
        
    }

    ,


    {
        line: 10,
        text: "balances.sort((a, b) => {return b-a})",
        indent: true

    },

    {
        line: 11,
        text: "return balances[0] ",
        indent: true
    }

    ,
    
    {
        line: 12,
        text: "};",
        indent:true
    }
    
]