import type { Expression } from 'nerdamer';
import nerdamer from 'nerdamer';
import 'nerdamer/calculus';

export function texToString(expression: string): string {
  try {
    const parsed = nerdamer.convertFromLaTeX(expression);
    return parsed.toString();
  } catch (error) {
    return expression;
  }
}

export function stringToTex(expression: string): string {
  try {
    const parsed = nerdamer(expression);
    return parsed.toTeX();
  } catch (error) {
    return expression;
  }
}

export function indefiniteIntegral(expression: string, variable: string): Expression {
  const integral = nerdamer.integrate(expression, variable);
  return integral;
}

export function definiteIntegral(expression: string, variable: string, lowerLimit: string, upperLimit: string): Expression {
  const integral = nerdamer(`defint(${expression}, ${lowerLimit}, ${upperLimit}, ${variable})`);
  return integral;
}
