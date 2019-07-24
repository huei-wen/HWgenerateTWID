function checkTWID(id) {
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/;  //  前面的東西出現8次,$:結尾符號
    let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';

    if (id.match(regex) != null) {
        let c1 = id.charAt(0);
        let n12 = letters.indexOf(c1) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1, 1));
        let n4 = parseInt(id.substr(2, 1));
        let n5 = parseInt(id.substr(3, 1));
        let n6 = parseInt(id.substr(4, 1));
        let n7 = parseInt(id.substr(5, 1));
        let n8 = parseInt(id.substr(6, 1));
        let n9 = parseInt(id.substr(7, 1));
        let n10 = parseInt(id.substr(8, 1));
        let n11 = parseInt(id.substr(9, 1));
        let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3
            + n9 * 2 + n10 * 1 + n11 * 1;
        ret = sum % 10 == 0;

    }
    return ret;
}
function createTWID(area, gender) {
    if (area == 0) {
        area = parseInt((Math.random() * 26) + 10);
    }
    if (gender == 0) {
        gender = parseInt((Math.random() * 2) + 1);
    }
    let id = '';
    do {
        id = generate(area, gender);
    } while (!checkTWID(id));
    return id;
}

function generate(area, gender) {
    let area1 = parseInt(area / 10);
    let area2 = area % 10;
    let n1 = parseInt((Math.random() * 10));
    let n2 = parseInt((Math.random() * 10));
    let n3 = parseInt((Math.random() * 10));
    let n4 = parseInt((Math.random() * 10));
    let n5 = parseInt((Math.random() * 10));
    let n6 = parseInt((Math.random() * 10));
    let n7 = parseInt((Math.random() * 10));
    let sum = area1 * 1 + area2 * 9 + gender * 8 + n1 * 7 + n2 * 6 + n3 * 5 + n4 * 4
        + n5 * 3 + n6 * 2 + n7 * 1;
    let n8;
    if (sum % 10 == 0) {
        n8 = 0;
    } else {
        n8 = 10 - (sum % 10);
    }
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'W', 'Z', 'I', 'O'];

    area = letters[area - 10];

    let id = String(area) + String(gender) + String(n1) + String(n2) + String(n3)
        + String(n4) + String(n5) + String(n6) + String(n7) + String(n8);
    return id;
}