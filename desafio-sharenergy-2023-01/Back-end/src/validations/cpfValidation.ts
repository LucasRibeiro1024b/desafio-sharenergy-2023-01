export const isCpfValid = (cpf: string): boolean => {

    let cpfArray: string[] = cpf.split("")
    let cpfArrayNumbers: number[] = []
    
    for(let i = 0; i < cpfArray.length; i++) cpfArrayNumbers.push(parseInt(cpfArray[i]))
    
    if(cpfArrayNumbers.length != 11 || 
    cpf === "000.000.000-00" 
    || cpf === "111.111.111-11" 
    || cpf === "222.222.222-22" 
    || cpf === "333.333.333-33" 
    || cpf === "444.444.444-44" 
    || cpf === "555.555.555-55" 
    || cpf === "666.666.666-66" 
    || cpf === "777.777.777-77" 
    || cpf === "888.888.888-88" 
    || cpf === "999.999.999-99") {
        return false
    }  

    let mult1 = cpfArrayNumbers[0] * 10
    let mult2 = cpfArrayNumbers[1] * 9
    let mult3 = cpfArrayNumbers[2] * 8
    let mult4 = cpfArrayNumbers[3] * 7
    let mult5 = cpfArrayNumbers[4] * 6
    let mult6 = cpfArrayNumbers[5] * 5
    let mult7 = cpfArrayNumbers[6] * 4
    let mult8 = cpfArrayNumbers[7] * 3
    let mult9 = cpfArrayNumbers[8] * 2

    let sum1 = mult1 + mult2 + mult3 + mult4 + mult5 + mult6 + mult7 + mult8 + mult9
    let dv1 = 11 - (sum1 % 11) 

    if(dv1 >= 10) dv1 = 0

    let mult10 = cpfArrayNumbers[0] * 11
    let mult11 = cpfArrayNumbers[1] * 10
    let mult12 = cpfArrayNumbers[2] * 9
    let mult13 = cpfArrayNumbers[3] * 8
    let mult14 = cpfArrayNumbers[4] * 7
    let mult15 = cpfArrayNumbers[5] * 6
    let mult16 = cpfArrayNumbers[6] * 5
    let mult17 = cpfArrayNumbers[7] * 4
    let mult18 = cpfArrayNumbers[8] * 3
    let mult19 = cpfArrayNumbers[9] * 2

    let sum2 = mult10 + mult11 + mult12 + mult13 + mult14 + mult15 + mult16 + mult17 + mult18 + mult19
    let dv2 = 11 - (sum2 % 11)

    if(dv2 >= 10) dv2 = 0

    if(cpfArrayNumbers[9] === dv1 && cpfArrayNumbers[10] === dv2){
        return true
    } else {
        return false
    }
}
