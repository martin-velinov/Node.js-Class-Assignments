const moduleFaker= require('@faker-js/faker')

let people=[];

for (i=0;i<=10;i++){

    let first_name= moduleFaker.faker.name.firstName();
    let address= moduleFaker.faker.address.city();
    let phone = moduleFaker.faker.phone.phoneNumber();
    let company= moduleFaker.faker.company.companyName();

    people.push({
        first_name:first_name,
        address:address,
        phone:phone,
        company:company
    })
}

console.log(people)