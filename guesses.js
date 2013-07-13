function showWord(teamId, word) // teamId should be "team1" or "team2"
{
	$("#" + teamId).css("opacity", "0");
	document.getElementById(teamId).innerHTML = word;
	
	$("#" + teamId).animate(
	{
		paddingTop : "0"
	}, 50);
	$("#" + teamId).animate(
	{
		paddingTop : "15px",
		opacity : 1
	}, 250);
	$("#" + teamId).animate(
	{
		paddingTop : "0"
	}, 250);
	$("#" + teamId).animate(
	{
		opacity : 0
	}, 1000);
}
