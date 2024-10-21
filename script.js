// Function to update the progress when "Progress Completed" is changed
function updateProgressFromCompleted() {
    let progressCompletedInput = document.getElementById('progress-completed').value;
    let progressRemainingInput = document.getElementById('progress-remaining');
    let progressBar = document.getElementById('progress-bar');

    // Ensure the completed value is within bounds
    if (progressCompletedInput < 0) {
        alert("The value cannot be less than 0. Setting progress to 0%.");
        progressCompletedInput = 0;
    } else if (progressCompletedInput > 100) {
        alert("The value cannot be greater than 100. Setting progress to 100%.");
        progressCompletedInput = 100;
    }

    // Calculate the remaining progress based on the completed progress
    let progressRemaining = 100 - progressCompletedInput;

    // Update the progress bar and the remaining progress
    progressRemainingInput.value = progressRemaining;
    updateProgressBar(progressCompletedInput);
}

// Function to update the progress when "Progress Remaining" is changed
function updateProgressFromRemaining() {
    let progressRemainingInput = document.getElementById('progress-remaining').value;
    let progressCompletedInput = document.getElementById('progress-completed');
    let progressBar = document.getElementById('progress-bar');

    // Ensure the remaining value is within bounds
    if (progressRemainingInput < 0) {
        alert("The value cannot be less than 0. Setting remaining to 0%.");
        progressRemainingInput = 0;
    } else if (progressRemainingInput > 100) {
        alert("The value cannot be greater than 100. Setting remaining to 100%.");
        progressRemainingInput = 100;
    }

    // Calculate the completed progress based on the remaining progress
    let progressCompleted = 100 - progressRemainingInput;

    // Update the progress bar and the completed progress
    progressCompletedInput.value = progressCompleted;
    updateProgressBar(progressCompleted);
}

// Function to update the progress bar based on the completed progress
function updateProgressBar(completedValue) {
    let progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${completedValue}%`;
    progressBar.setAttribute('aria-valuenow', completedValue);
    progressBar.textContent = `${completedValue}%`;
}

// Function to start the timer-based progress (same as before)
function startTimer() {
    let timerValue = document.getElementById('progress-timer').value;
    let progressBar = document.getElementById('progress-bar');
    let progressCompletedInput = document.getElementById('progress-completed');
    let progressRemainingInput = document.getElementById('progress-remaining');

    let duration = timerValue * 1000; // Convert seconds to milliseconds
    let interval = 100; // Update progress every 100ms
    let steps = duration / interval;
    let progressStep = 100 / steps;
    let currentProgress = 0;

    let progressInterval = setInterval(function () {
        if (currentProgress >= 100) {
            clearInterval(progressInterval);
        } else {
            currentProgress += progressStep;
            progressBar.style.width = `${currentProgress}%`;
            progressBar.setAttribute('aria-valuenow', currentProgress);
            progressBar.textContent = `${Math.round(currentProgress)}%`;
            progressCompletedInput.value = Math.round(currentProgress);
            progressRemainingInput.value = Math.round(100 - currentProgress);
        }
    }, interval);
}
