window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(
            datatablesSimple,
            {
                layout: {
                    top: "{search}{info}",
                    bottom: "{pager}{select}"
                }
            }
        );
    }
});
