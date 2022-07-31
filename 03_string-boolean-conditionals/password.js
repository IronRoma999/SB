let password = '****-';

if (password.length > 4 && (password.includes('_') || password.includes('-'))) {
    console.log('Допустимый пароль');
}  else {
    console.log('Такой пароль недопустим');
}