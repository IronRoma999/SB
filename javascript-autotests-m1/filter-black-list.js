['1', '2', '3', '4', '5'], ['0', '3', '4']


function findmail(emails, wantidmail = '') {
        let result = []

        for (let mail of emails){
            if (wantidmail.includes(mail) == false) result.push(mail)
        }
        

        return result

    }

export default findmail