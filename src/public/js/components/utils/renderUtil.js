function RenderComponent(idTarget, renderHTML)
{
    var target = document.querySelector(idTarget);
    target.innerHTML = renderHTML;
}
function clearComponent(idTarget)
{
    var target = document.querySelector(idTarget);
    target.innerHTML = '';
}

export {RenderComponent,clearComponent};