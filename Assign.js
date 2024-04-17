// / / solution of question number -1___________________________________________



function generatePoints(numPoints) {
    let points = [];
    for (let i = 0; i < numPoints; i++) {
        points.push([Math.random(), Math.random()]);
    }
    return points;
}

function euclDistance(point1, point2) {
    let dx = point1[0] - point2[0];
    let dy = point1[1] - point2[1];
    return Math.sqrt(dx * dx + dy * dy);
}

function findWithEpsilon(setA, setB, epsilon) {
    let pairs = [];
    for (let i = 0; i < setA.length; i++) {
        for (let j = 0; j < setB.length; j++) {
            let distance = euclDistance(setA[i], setB[j]);
            if (distance < epsilon) {
                pairs.push([setA[i], setB[j]]);
            }
        }
    }
    return pairs;
}

let numPointsA = 10;
let numPointsB = 10;
let setA = generatePoints(numPointsA);
let setB = generatePoints(numPointsB);


let epsilon = 0.5;

let pairsWithinEpsilon = findWithEpsilon(setA, setB, epsilon);

console.log("Pair of points with epsilon:");

pairsWithinEpsilon.forEach(pair => console.log(pair));






// solution of question no-2  in javascript ___________________________________



function gcd(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

var a = 12;
var b = 18;
console.log("GCD:", gcd(a, b));
console.log("LCM:", lcm(a, b));
