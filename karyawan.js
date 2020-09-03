/*let karyawan = [
    {
        nama : "Panda Sulistiawan",
        jabatan : "Bamboo farmer",
        umur : 25
    },
    {
        nama : "Domba Fallarudin",
        jabatan : "Gardener",
        umur : 21
    },
    {
        nama : "Tupai jumaedah",
        jabatan : "Nut cracker",
        umur : 22
    }
]
export default karyawan*/

class Employee {
    constructor(name, position, age) {
        this.name = name;
        this.position = position;
        this.age = age;
    }
}

export default Employee
