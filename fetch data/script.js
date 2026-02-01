async function fetchUsers() {
    const contentArea = document.getElementById('contentArea');
    const btn = document.getElementById('fetchBtn');

    // Loading State
    contentArea.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Fetching data...</div>';
    btn.disabled = true;
    btn.textContent = 'Loading...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch');

        const users = await response.json();

        // Build Table
        let tableHTML = `
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        users.forEach(user => {
            tableHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                </tr>
            `;
        });

        tableHTML += `
                    </tbody>
                </table>
            </div>
        `;

        contentArea.innerHTML = tableHTML;

    } catch (error) {
        contentArea.innerHTML = `<div class="error"><i class="fas fa-exclamation-circle"></i> Error: ${error.message}</div>`;
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh Data';
    }
}
