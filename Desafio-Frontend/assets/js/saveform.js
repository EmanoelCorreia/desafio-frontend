$(document).ready(function() {
    var indice_selecionado = -1;
    var Funcionarios = localStorage.getItem("Funcionarios");
    Funcionarios = JSON.parse(Funcionarios);
    ListarHome();
    Listar();

    Funcionarios = [];

    $('#form').submit(function(e) { 
        e.preventDefault();
        var funcionario = JSON.stringify({
            Nome  : $("#nome").val(),
            Sobrenome : $("#sobrenome").val(),
            Cargo : $("#cargo").val(),
            Setor : $("#setor").val(),
            TempoEmpresa : $("#tempoempresa").val()
        });

        Funcionarios.push(funcionario);
        console.log(Funcionarios);
        localStorage.setItem("Funcionarios", JSON.stringify(Funcionarios));
        $("#nome, #sobrenome, #cargo, #setor, #tempoempresa").val('');

        alert("Funcionário adicionado com sucesso.");

        Listar();
        ListarHome();
        return true; 

    });

    function ListarHome() {
        $("#listaFuncionariosHome").html(
            "<thead>"+
            "   <tr>"+
            "   <th>Nome</th>"+
            "   <th>Sobrenome</th>"+
            "   <th>Cargo</th>"+
            "   <th>Setor</th>"+
            "   <th>Tempo de empresa</th>"+
            "   </tr>"+
            "</thead>"+
            "<tbody>"+
            "</tbody>"
            );

        for(var i in Funcionarios){
            var cli = JSON.parse(Funcionarios[i]);
            $("#listaFuncionariosHome tbody").append("<tr>");
            $("#listaFuncionariosHome tbody").append("<td>"+cli.Nome+"</td>");
            $("#listaFuncionariosHome tbody").append("<td>"+cli.Sobrenome+"</td>");
            $("#listaFuncionariosHome tbody").append("<td>"+cli.Cargo+"</td>");
            $("#listaFuncionariosHome tbody").append("<td>"+cli.Setor+"</td>");
            $("#listaFuncionariosHome tbody").append("<td>"+cli.TempoEmpresa+"</td>");
            $("#listaFuncionariosHome tbody").append("</tr>");
        }

    }


    function Listar() {
        $("#listaFuncionarios").html(
            "<thead>"+
            "   <tr>"+
            "   <th>Nome</th>"+
            "   <th>Sobrenome</th>"+
            "   <th>Cargo</th>"+
            "   <th>Setor</th>"+
            "   <th>Tempo de empresa</th>"+
            "   <th class='text-center'>Excluir</th>"+
            "   </tr>"+
            "</thead>"+
            "<tbody>"+
            "</tbody>"
            );

        for(var i in Funcionarios){
            var cli = JSON.parse(Funcionarios[i]);
            $("#listaFuncionarios tbody").append("<tr>");
            $("#listaFuncionarios tbody").append("<td>"+cli.Nome+"</td>");
            $("#listaFuncionarios tbody").append("<td>"+cli.Sobrenome+"</td>");
            $("#listaFuncionarios tbody").append("<td>"+cli.Cargo+"</td>");
            $("#listaFuncionarios tbody").append("<td>"+cli.Setor+"</td>");
            $("#listaFuncionarios tbody").append("<td>"+cli.TempoEmpresa+"</td>");
            $("#listaFuncionarios tbody").append("<td class='text-center'><span class='icon-delete' id='"+i+"'></span></td>");
            $("#listaFuncionarios tbody").append("</tr>");
        }

    }

    function Excluir(){
        Funcionarios.splice(indice_selecionado, 1);
        localStorage.setItem("Funcionarios", JSON.stringify(Funcionarios));
        alert("Funcionário excluído com sucesso.");
    }

    $("#listaFuncionarios").on("click", ".icon-delete",function(){
        indice_selecionado = parseInt($(this).attr("id"));
        Excluir();
        Listar();
        ListarHome();
    });



});


