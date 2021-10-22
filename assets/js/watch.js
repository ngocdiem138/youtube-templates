
// size of video
const video = $('#primary .video iframe');
const wVideo = parseFloat(video.getAttribute('width'));
const hVideo = parseFloat(video.getAttribute('height'));

// set width height for video player
const setSizeVideo = function () {
    const heightVideo = (video.clientWidth / wVideo) * hVideo;
    video.setAttribute('height', heightVideo + 'px');
};

// oncomment
const addComment = function () {
    const addComment = $('#primary .comments .add-comment input');
    const interaction = $('#primary .comments .save-comment');
    const btnCancel = $('#primary .comments .save-comment .cancel');
    const btnSave = $('#primary .comments .save-comment .save');

    let isDisplay = false;
    addComment.onclick = () => {
        if (!isDisplay) {
            interaction.style.display = 'block';
        } else {
            interaction.style.display = 'none';
        }
        isDisplay = !isDisplay;
    }

    btnCancel.onclick = () => {
        if (isDisplay) {
            interaction.style.display = 'none';
            isDisplay = false;
        }
    }

    btnSave.onclick = () => {
        if (isDisplay) {
            interaction.style.display = 'none';
            isDisplay = false;
        }
    }
}

// edit comment
const editComment = function () {
    const options = $('#primary .comments .comment .comment-content .options');
    const btnEdit = $('#primary .comments .comment .comment-content .comment-edit-delete');
    let isDisplay = false;
    options.onclick = () => {
        if (!isDisplay) {
            btnEdit.style.display = 'block';
        } else {
            btnEdit.style.display = 'none';
        }
        isDisplay = !isDisplay;
    }
}

// window onresize
window.onresize = function () {
    setSizeVideo();
}

setSizeVideo();
addComment();
editComment();