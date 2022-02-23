export const linesOfCode = [
    {
        line: 1,
        text: "var maximumWealth = function(accounts) {",
        indent: "none"
    },

    {
        line: 2,
        text: "balances = []",
        indent: "single"
    },

    {
        line: 3,
        text: "accounts.forEach((account, index) => {",
        indent: "single"
    },

    {
        line: 4,
        text: "let account_sum = 0 ",
        indent: "double"
    },

    {
        line: 5,
        text: "account.forEach((elem, index) => {",
        indent: "double"
    },

    {
        line: 6,
        text: "account_sum += elem",
        indent: "triple"
    },

    {
        line: 7,
        text: "})",
        indent: "double"
    },

    {
        line: 8,
        text: "balances.push(account_sum)",
        indent: "double"
    },
    
    {
        line: 9,
        text: "})",
        indent: "single"
        
    }

    ,


    {
        line: 10,
        text: "balances.sort((a, b) => {return b-a})",
        indent: "single"

    },

    {
        line: 11,
        text: "return balances[0] ",
        indent: "single"
    }

    ,
    
    {
        line: 12,
        text: "};",
        indent:"none"
    }
    
]