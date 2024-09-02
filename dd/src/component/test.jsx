import React from 'react';

const UploadComponent = () => {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        
        if (file) {
            const uploadPath = `./src/component/upload/${file.name}`;
            // Move the file to the upload folder
            fetch(uploadPath, {
                method: 'PUT',
                body: file
            })
            .then(response => {
                if (response.ok) {
                    alert('File uploaded successfully!');
                } else {
                    alert('Failed to upload file.');
                }
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
        }
    };
    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
};

export default UploadComponent;