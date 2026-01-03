// 1. Selecting elements
const usernameField = document.getElementById('usernameInput');
const userPasswordField = document.getElementById('userPassword');
const userBirthDateField = document.getElementById('userBirthInput');
const saveButton = document.getElementById('saveBtn');
const welcomeH1 = document.querySelector('h1');

// 2. Event Listener
saveButton.addEventListener('click', function() {

    const currentUsername = usernameField.value;

    // ÖNEMLİ: Her tıklamada önce eski sınıfları temizle!
    // Yoksa önce hata alıp sonra düzeltince kırmızı renk gitmez.
    welcomeH1.classList.remove("success-message", "error-message");

    // Validation Check
    if (currentUsername === "") {
        alert("Username cannot be empty!");
        
        // Stil değişikliği yerine sınıf ekliyoruz
        welcomeH1.innerText = "Error! Missing Username";
        welcomeH1.classList.add("error-message"); 

    } else {
        alert("Welcome " + currentUsername + "! Registration successful.");

        // Stil değişikliği yerine sınıf ekliyoruz
        welcomeH1.innerText = "Welcome " + currentUsername + "!";
        welcomeH1.classList.add("success-message");

                // Kutuları temizle (UX improvement)
        usernameField.value = "";
        userPasswordField.value = "";
        userBirthDateField.value = "";
        

        // 5. Saving the values to local storage
        localStorage.setItem('username', currentUsername);
        localStorage.setItem('birthDate', currentUserBirthDate);


        console.log("User saved: " + currentUsername);
    }
});