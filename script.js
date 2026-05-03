let selectedFiles = [];
const API_URL = "https://n8n.srv1234891.hstgr.cloud/webhook/upload-pdfs";
const MAX_FILE_SIZE = 3 * 1024 * 1024;

const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');
const filesContainer = document.getElementById('files-container');
const analyzeBtn = document.getElementById('analyze-btn');
const errorMessage = document.getElementById('error-message');
const loadingScreen = document.getElementById('loading-screen');
const uploadPage = document.getElementById('upload-page');
const dashboard = document.getElementById('dashboard');

dropzone.addEventListener('dragover', e => e.preventDefault());
dropzone.addEventListener('drop', e => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener('change', e => handleFiles(e.target.files));

function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (file.type === 'application/pdf' && file.size <= MAX_FILE_SIZE) {
            selectedFiles.push(file);
        } else {
            showError("Only PDF under 3MB allowed");
        }
    });
    updateFileList();
}

function updateFileList() {
    fileList.classList.toggle('hidden', selectedFiles.length === 0);

    filesContainer.innerHTML = selectedFiles.map((file, i) => `
        <div>
            ${file.name}
            <button onclick="removeFile(${i})">X</button>
        </div>
    `).join('');
}

window.removeFile = (i) => {
    selectedFiles.splice(i, 1);
    updateFileList();
};

function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.remove('hidden');
}

analyzeBtn.addEventListener('click', async () => {
    uploadPage.classList.add('hidden');
    loadingScreen.classList.remove('hidden');

    try {
        const formData = new FormData();
        selectedFiles.forEach(f => formData.append('files', f));

        const res = await fetch(API_URL, {
            method: 'POST',
            body: formData
        });

        let result = await res.json();

        loadingScreen.classList.add('hidden');
        dashboard.classList.remove('hidden');

        renderDashboard(result.data);

    } catch (e) {
        showError("Error: " + e.message);
    }
});

function renderDashboard(data) {
    const table = document.getElementById('plan-table-body');

    table.innerHTML = data.map(item => `
        <div>
            ${item.topic} - ${item.priority}
        </div>
    `).join('');

    initCharts(data);
}

function initCharts(data) {
    new Chart(document.getElementById('frequencyChart'), {
        type: 'bar',
        data: {
            labels: data.map(i => i.topic),
            datasets: [{
                data: data.map(i => i.frequency || 0)
            }]
        }
    });

    new Chart(document.getElementById('difficultyChart'), {
        type: 'doughnut',
        data: {
            labels: ['High', 'Medium', 'Low'],
            datasets: [{
                data: [5, 3, 2]
            }]
        }
    });
}
