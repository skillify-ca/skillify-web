import React from "react";
import {
  EvaluateExpressionState,
  precedenceMap,
} from "../../redux/evaluateExpressionSlice";
import { useAppDispatch } from "../../redux/store";
import { Button } from "../ui/Button";
import SimpleCalculator from "./SimpleCalculator";
import Stack from "./Stack";

export interface EvaluateExpressionProps {
  state: EvaluateExpressionState;
  onNextRequested: () => void;
  onResetRequested: () => void;
  onInputChangeRequested: (val: string) => void;
}
const EvaluateExpression = ({
  state,
  onNextRequested,
  onResetRequested,
  onInputChangeRequested,
}: EvaluateExpressionProps) => {
  const handleNextClick = () => {
    onNextRequested();
  };
  const handleResetClick = () => {
    onResetRequested();
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p>Evaluate an expression string and return a number</p>
      <div>
        <input
          value={state.inputExpression}
          onChange={(e) => onInputChangeRequested(e.target.value)}
        />
      </div>

      {JSON.stringify(state)}
      <Button
        label="Next"
        backgroundColor="blue"
        textColor="white"
        onClick={handleNextClick}
      />
      <Button
        label="Reset"
        backgroundColor="green"
        textColor="white"
        onClick={handleResetClick}
      />

      <p className="text-2xl font-bold">
        {state.inputExpression &&
          state.inputExpression.substring(state.currentIndex)}
      </p>
      {state.simpleCalculatorState && (
        <SimpleCalculator
          value1={state.simpleCalculatorState?.value1}
          value2={state.simpleCalculatorState?.value2}
          operator={state.simpleCalculatorState?.operator}
          answer={state.simpleCalculatorState?.answer}
        />
      )}
      <div className="grid justify-center grid-cols-2 gap-16 place-items-end">
        <div className="flex flex-col items-center">
          <Stack
            items={state.valueStack.map((it) => it.toString()).reverse()}
          />
          <p className="text-xl">Value Stack</p>
        </div>
        <div className="flex flex-col items-center">
          <Stack
            items={state.operatorStack.map((it) => it.toString()).reverse()}
          />
          <p className="text-xl">Operator Stack</p>
        </div>
      </div>
    </div>
  );
};

export default EvaluateExpression;

/**
 * 
 * 
 * import java.util.Stack; 
  
class EvaluateString{
    
    public static int evaluate(String expression){
        
        char[] tokens = expression.toCharArray(); 
  
        Stack<Integer> values = new Stack<Integer>(); 
  
        Stack<Character> ops = new Stack<Character>(); 
  
        for (int i = 0; i < tokens.length; i++){ 
             
            if(tokens[i] == ' ') 
                continue; 
  
            if(tokens[i] >= '0' && tokens[i] <= '9'){ 
                StringBuffer sbuf = new StringBuffer(); 
                
                while(i < tokens.length && tokens[i] >= '0' && tokens[i] <= '9'){
                    sbuf.append(tokens[i++]); 
                }
                
                values.push(Integer.parseInt(sbuf.toString())); 
            } 
  
            else if(tokens[i] == '(') 
                ops.push(tokens[i]); 
  
            else if(tokens[i] == ')'){ 
                while (ops.peek() != '('){ 
                  values.push(applyOp(ops.pop(), values.pop(), values.pop())); 
                }  
                ops.pop(); 
            } 
  
            else if(tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/'){ 
                
                while (!ops.empty() && hasPrecedence(tokens[i], ops.peek())){ 
                  values.push(applyOp(ops.pop(), values.pop(), values.pop()));
                }  
  
                ops.push(tokens[i]); 
            } 
        } 
  
        while(!ops.empty()){ 
            values.push(applyOp(ops.pop(), values.pop(), values.pop())); 
        }    
  
        return values.pop(); 
    } 
  
    public static boolean hasPrecedence(char op1, char op2){ 
        if (op2 == '(' || op2 == ')') 
            return false; 
        if ((op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-')) 
            return false; 
        else
            return true; 
    } 
  
    public static int applyOp(char op, int b, int a){ 
        switch (op){ 
            case '+': 
                return a + b; 
            case '-': 
                return a - b; 
            case '*': 
                return a * b; 
            case '/': 
                if (b == 0) 
                    throw new
                    UnsupportedOperationException("Cannot divide by zero"); 
                return a / b; 
        } 
        return 0; 
    } 
  
    public static void main(String[] args){
        
        System.out.println(EvaluateString.evaluate("100 * ( 2 + 12 )")); 
        
    } 
 */
