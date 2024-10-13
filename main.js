$(document).ready(function(){
    $('header button').click(function(){
    $('form').slideDown();
    
    
    })

    $('#reset').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereçoImagem').val();
        const novoItem = $(`
            <li style="display: none">
                <img src="${enderecoNovaImagem}"/>
                    <div class="imagens">
                        <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                        Ver imagem em tamanho real
                        </a>
                    </div>
            </li>
                        `)
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn();
            $('#endereçoImagem').val('');
    })
})