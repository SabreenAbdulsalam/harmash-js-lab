// التحكم بتحديد القسم النشط في القائمة الجانبية أثناء التمرير
const mainContent = document.querySelector('.main-content');
const sections = document.querySelectorAll('.lesson-card');
const navItems = document.querySelectorAll('.nav-item');

mainContent.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (mainContent.scrollTop >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// 1. درس المتغيرات (مع إضافة شرط العمر)
function testVariables() {
    let name = document.getElementById('varName').value;
    let age = document.getElementById('varAge').value;
    const output = document.getElementById('varOutput');
    
    if(!name || !age) {
        output.innerHTML = `<span style="color: #ff4757;">الرجاء تعبئة كلا الحقلين!</span>`;
    } else if (Number(age) < 1) {
        // هذا الشرط يمنع إدخال صفر أو أرقام بالسالب
        output.innerHTML = `<span style="color: #ff4757;">خطأ: يجب أن يكون العمر رقماً صحيحاً أكبر من الصفر!</span>`;
    } else {
        output.innerHTML = `تم إنشاء المتغيرات بنجاح!<br> 
        <code>let userName = "${name}";</code><br>
        <code>let userAge = ${age};</code>`;
    }
    output.style.display = 'block';
}

// 2. درس أنواع البيانات
function testDataTypes() {
    let val = document.getElementById('typeInput').value;
    const output = document.getElementById('typeOutput');
    let type = 'نص (String)';
    
    if(!isNaN(val) && val.trim() !== '') {
        type = 'رقم (Number)';
    } else if (val.toLowerCase() === 'true' || val.toLowerCase() === 'false') {
        type = 'قيمة منطقية (Boolean)';
    }

    if(val === '') {
        output.innerHTML = `القيمة فارغة (Empty String)`;
    } else {
        output.innerHTML = `القيمة المدخلة: <strong>${val}</strong> <br>نوع البيانات: <strong>${type}</strong>`;
    }
    output.style.display = 'block';
}

// 3. درس العوامل

function testOperators() {
    let num1Input = document.getElementById('opNum1').value;
    let num2Input = document.getElementById('opNum2').value;
    let op = document.getElementById('operatorSelect').value;
    const output = document.getElementById('opOutput');
    
    // التحقق من إدخال الرقمين
    if(num1Input === '' || num2Input === '') {
        output.innerHTML = `<span style="color: #ff4757;">الرجاء إدخال كلا الرقمين لإتمام العملية!</span>`;
        output.style.display = 'block';
        return;
    }

    let n1 = Number(num1Input);
    let n2 = Number(num2Input);
    let result;

    // تنفيذ العملية بناءً على اختيار المستخدم
    if(op === '+') result = n1 + n2;
    else if(op === '-') result = n1 - n2;
    else if(op === '*') result = n1 * n2;
    else if(op === '/') result = n1 / n2;
    else if(op === '>') result = n1 > n2 ? 'صحيح (True)' : 'خطأ (False)';
    else if(op === '<') result = n1 < n2 ? 'صحيح (True)' : 'خطأ (False)';
    else if(op === '>=') result = n1 >= n2 ? 'صحيح (True)' : 'خطأ (False)';
    else if(op === '<=') result = n1 <= n2 ? 'صحيح (True)' : 'خطأ (False)';
    else if(op === '==') result = n1 == n2 ? 'صحيح (True)' : 'خطأ (False)';

    output.innerHTML = `العملية: <code>${n1} ${op} ${n2}</code> <br>النتيجة: <strong>${result}</strong>`;
    output.style.display = 'block';
}
// 4. درس الشروط
function testCondition() {
    let grade = Number(document.getElementById('gradeInput').value);
    const output = document.getElementById('condOutput');
    
    if(document.getElementById('gradeInput').value === '' || grade < 0 || grade > 100) {
        output.innerHTML = `<span style="color: #ff4757;">أدخل درجة صالحة بين 0 و 100!</span>`;
    } else if(grade >= 90) {
        output.innerHTML = `الشرط: <code>if (grade >= 90)</code> <br>النتيجة: <span style="color: #2ed573;">ممتاز!</span>`;
    } else if(grade >= 50) {
        output.innerHTML = `الشرط: <code>else if (grade >= 50)</code> <br>النتيجة: <span style="color: #ffa502;">ناجح</span>`;
    } else {
        output.innerHTML = `الشرط: <code>else</code> <br>النتيجة: <span style="color: #ff4757;">راسب</span>`;
    }
    output.style.display = 'block';
}

// 5. درس الحلقات (محدث ليطبع نصوص المستخدم)
function testLoops() {
    let text = document.getElementById('loopText').value;
    let count = Number(document.getElementById('loopCount').value);
    const output = document.getElementById('loopOutput');
    
    // التحقق من إدخال النص والرقم
    if (text.trim() === '' || count <= 0 || count > 20) {
        output.innerHTML = `<span style="color: #ff4757;">الرجاء إدخال كلمة، ورقم تكرار بين 1 و 20!</span>`;
        output.style.display = 'block';
        return;
    }

    // عرض شكل الكود للمستخدم
    let result = `الكود المُنفّذ:<br>
    <code>for (let i = 1; i <= ${count}; i++) { console.log("${text}"); }</code>
    <br><br><strong>النتيجة:</strong><br>`;

    // تنفيذ حلقة التكرار (Loop)
    for (let i = 1; i <= count; i++) {
        result += `${i}. ${text} <br>`;
    }
    
    output.innerHTML = result;
    output.style.display = 'block';
}
// 6. درس المصفوفات
let myArray = [];
function addToArray() {
    let item = document.getElementById('arrayItem').value;
    const output = document.getElementById('arrayOutput');
    
    if (item.trim() !== '') {
        myArray.push(item);
        document.getElementById('arrayItem').value = ''; 
    }
    
    output.innerHTML = `المصفوفة الحالية (طولها ${myArray.length}): <br> <code>[ "${myArray.join('", "')}" ]</code>`;
}

// 7. درس الدوال
function testFunctionLogic(num) {
    return num * num;
}

function callFunction() {
    let val = Number(document.getElementById('funcInput').value);
    const output = document.getElementById('funcOutput');
    
    if (document.getElementById('funcInput').value === '') {
         output.innerHTML = `<span style="color: #ff4757;">الرجاء إدخال رقم!</span>`;
    } else {
        let result = testFunctionLogic(val);
        output.innerHTML = `تم تمرير الرقم ${val} للدالة.<br>النتيجة المُرجعة (Return) هي: <strong>${result}</strong>`;
    }
    output.style.display = 'block';
}

// 8. درس الكائنات
function createObject() {
    // يجب أن تتطابق الأسماء هنا مع الـ HTML
    let prodTitle = document.getElementById('objTitle').value;
    let prodCost = document.getElementById('objCost').value;
    const output = document.getElementById('objOutput');
    
    if(prodTitle.trim() === '' || prodCost === '' || Number(prodCost) <= 0) {
        output.innerHTML = `<span style="color: #ff4757;">الرجاء كتابة اسم المنتج وإدخال سعر صحيح!</span>`;
    } else {
        let myObject = {
            title: prodTitle,
            price: Number(prodCost),
            status: "متوفر"
        };

        output.innerHTML = `تم إنشاء الكائن بنجاح:<br>
        <code>
        {<br>
        &nbsp;&nbsp;title: "${myObject.title}",<br>
        &nbsp;&nbsp;price: ${myObject.price},<br>
        &nbsp;&nbsp;status: "${myObject.status}"<br>
        }
        </code>`;
    }
    output.style.display = 'block';
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.lesson-card').forEach(section => {
    observer.observe(section);
});
