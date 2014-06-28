import io.Source._

object Main{
  def compress(l: List[Int]): List[Int] = {
    def helper(fl: List[Int], bl: List[Int], count: Int, item: Int): List[Int] = {
      if(bl.size == 0)
        return fl:::List(count, item)
      if(item == bl(0))
        return helper(fl, bl.slice(1, bl.size), count+1, item)
      return helper(fl:::List(count, item), bl.slice(1, bl.size), 1, bl(0))
    }
    return helper(List[Int](), l.tail, 1, l.head)
  }

  def compress_fold(l: List[Int]): List[Int] = {
    def accum(l: List[Int], n: Int): List[Int] = {
      if(l.size == 0)
        return List(1, n)
      if(l(l.size-1) == n)
        return l.slice(0, l.size-2):::List(l(l.size-2)+1, l(l.size-1))
      return l:::List(1, n)
    }
    l.foldLeft(List[Int]())(accum)
  }
  def main(args: Array[String]){
    val file = fromFile(args(0))
    val lines = file.mkString.split("\n")
    val lists = lines.map((line: String) => compress(line.split(" ").toList.map((i: String) => i.toInt)))
    lists.foreach((l: List[Int]) => println(l.foldLeft("")((ls: String, i: Int)=>ls+ " " + i.toString)))
  }
}
