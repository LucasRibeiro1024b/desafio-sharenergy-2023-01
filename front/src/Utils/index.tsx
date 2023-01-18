export const pagCount = [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
    {id: 14},
    {id: 15},
    {id: 16},
    {id: 17},
    {id: 18},
    {id: 19},
]

interface IStatusCode {
    status: string;
    valid: boolean;
}

export const statusCode: IStatusCode[] = [
    {status: "100", valid: true},
    {status: "101", valid: true},
    {status: "102", valid: true},
    {status: "103", valid: true},
    {status: "104", valid: false},
    {status: "105", valid: false},
    {status: "106", valid: false},
    {status: "107", valid: false},
    {status: "108", valid: false},
    {status: "109", valid: false},
    {status: "110", valid: false},
    {status: "200", valid: true},
    {status: "201", valid: true},
    {status: "202", valid: true},
    {status: "203", valid: true},
    {status: "204", valid: true},
    {status: "205", valid: false},
    {status: "206", valid: true},
    {status: "207", valid: true},
    {status: "208", valid: false},
    {status: "209", valid: false},
    {status: "210", valid: false},
    {status: "300", valid: true},
    {status: "301", valid: true},
    {status: "302", valid: true},
    {status: "303", valid: true},
    {status: "304", valid: true},
    {status: "305", valid: true},
    {status: "306", valid: false},
    {status: "307", valid: true},
    {status: "308", valid: true},
    {status: "309", valid: false},
    {status: "310", valid: false},
    {status: "400", valid: true},
    {status: "401", valid: true},
    {status: "402", valid: true},
    {status: "403", valid: true},
    {status: "404", valid: true},
    {status: "405", valid: true},
    {status: "406", valid: true},
    {status: "407", valid: true},
    {status: "408", valid: true},
    {status: "409", valid: true},
    {status: "410", valid: true},
    {status: "411", valid: true},
    {status: "412", valid: true},
    {status: "413", valid: true},
    {status: "414", valid: true},
    {status: "415", valid: true},
    {status: "416", valid: true},
    {status: "417", valid: true},
    {status: "418", valid: true},
    {status: "419", valid: false},
    {status: "420", valid: true},
    {status: "421", valid: true},
    {status: "422", valid: true},
    {status: "423", valid: true},
    {status: "424", valid: true},
    {status: "425", valid: true},
    {status: "426", valid: true},
    {status: "429", valid: true},
    {status: "431", valid: true},
    {status: "444", valid: true},
    {status: "450", valid: true},
    {status: "451", valid: true},
    {status: "497", valid: true},
    {status: "498", valid: true},
    {status: "499", valid: true},
    {status: "500", valid: true},
    {status: "501", valid: true},
    {status: "502", valid: true},
    {status: "503", valid: true},
    {status: "504", valid: true},
    {status: "506", valid: true},
    {status: "507", valid: true},
    {status: "508", valid: true},
    {status: "509", valid: true},
    {status: "510", valid: true},
    {status: "511", valid: true},
    {status: "521", valid: true},
    {status: "522", valid: true},
    {status: "523", valid: true},
    {status: "525", valid: true},
    {status: "599", valid: true},
    {status: "600", valid: false},
]

export const checkValidCpfCnpj: Function = (val: string): boolean => {
    if (val.length === 14) {
        let cpf = val.trim();
        cpf = cpf.replace(/\./g, '');
        cpf = cpf.replace('-', '');

        let v1 = 0;
        let v2 = 0;
        let aux = false;

        for (let i = 1; cpf.length > i; i++) {
            if (cpf[i - 1] !== cpf[i]) {
                aux = true;
            }
        }

        if (aux === false) {
            return false;
        }

        for (let i = 0, p = 10; cpf.length - 2 > i; i++, p--) {
            v1 += Number(cpf[i]) * p;
        }

        v1 = (v1 * 10) % 11;

        if (v1 === 10) {
            v1 = 0;
        }

        if (v1 !== Number(cpf[9])) {
            return false;
        }

        for (let i = 0, p = 11; cpf.length - 1 > i; i++, p--) {
            v2 += Number(cpf[i]) * p;
        }

        v2 = (v2 * 10) % 11;

        if (v2 === 10) {
            v2 = 0;
        }

        if (v2 !== Number(cpf[10])) {
            return false;
        }
        return true;
    }
    if (val.length === 18) {
        let cnpj = val.trim();

        cnpj = cnpj.replace(/\./g, '');
        cnpj = cnpj.replace('-', '');
        cnpj = cnpj.replace('/', '');

        let v1 = 0;
        let v2 = 0;
        let aux = false;

        for (let i = 1; cnpj.length > i; i++) {
            if (cnpj[i - 1] !== cnpj[i]) {
                aux = true;
            }
        }

        if (aux === false) {
            return false;
        }

        for (let i = 0, p1 = 5, p2 = 13; cnpj.length - 2 > i; i++, p1--, p2--) {
            if (p1 >= 2) {
                v1 += Number(cnpj[i]) * p1;
            } else {
                v1 += Number(cnpj[i]) * p2;
            }
        }

        v1 %= 11;

        if (v1 < 2) {
            v1 = 0;
        } else {
            v1 = 11 - v1;
        }

        if (v1 !== Number(cnpj[12])) {
            return false;
        }

        for (let i = 0, p1 = 6, p2 = 14; cnpj.length - 1 > i; i++, p1--, p2--) {
            if (p1 >= 2) {
                v2 += Number(cnpj[i]) * p1;
            } else {
                v2 += Number(cnpj[i]) * p2;
            }
        }

        v2 %= 11;

        if (v2 < 2) {
            v2 = 0;
        } else {
            v2 = 11 - v2;
        }

        if (v2 !== Number(cnpj[13])) {
            return false;
        }
        return true;
    }
    return false;
};
