document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    
    let isDrawing = false;
    
    Object.assign(ctx, { lineWidth: 4, lineCap: 'round', strokeStyle: '#0000ff' });
    
    const getPos = e => {
        const rect = canvas.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    
    canvas.addEventListener('mousedown', e => {
        isDrawing = true;
        const { x, y } = getPos(e);
        ctx.beginPath();
        ctx.moveTo(x, y);
    });
    
    canvas.addEventListener('mousemove', e => {
        if (!isDrawing) return;
        const { x, y } = getPos(e);
        ctx.lineTo(x, y);
        ctx.stroke();
    });
    
    ['mouseup', 'mouseleave'].forEach(event => 
        canvas.addEventListener(event, () => isDrawing = false)
    );
});
