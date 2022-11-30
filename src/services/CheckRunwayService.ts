export default function CheckRunwayService(runway) {
    if(runway.status === "available"){
        return true;
    } else {
        return false;
    }
}