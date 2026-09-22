let quartosDisponivel = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponivel > 0) ? "reserva confirmada" :
(quartosDisponivel > 0) ? "aguardando confirmação"
:"sem quartos disponíveis";
console.log(statusReserva); //saida "reserva confirmada"