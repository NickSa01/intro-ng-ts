describe('Name of the group', () => {
    it('should be concat practice', () => {
        const name = 'Nick2';

        let age:number = 35;

        let nameAndAge = `My name is ${name} and my age is ${age}`;

        expect(nameAndAge).toBe('My name is Nick2 and my age is 35');
    });

    it('object and array practice', () => {
        const developer = { 
            Name: 'Nick',
            Age: 35,
            SSN: '123-45-6789',
            Password: 'hunter2',
            MaritalStatus: 'Single',
            Pet: [
                {
                Type: 'Dog',
                Name: 'Albert'
                }
            ]
        }

       // expect(nameAndAge).toBe('My name is Nick2 and my age is 35');
    });
});    
    
   