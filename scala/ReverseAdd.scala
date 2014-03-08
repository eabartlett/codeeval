import scala.io.Source._

object Main{
  def reverseInt(i: Int): Int = {
    return i.toString.foldLeft("")((str: String, c: Char) => c + str).toInt
  }

  def reverse_add(i: Int): Int = {
    return i + reverseInt(i)
  }

  def palindrome(i: Int): Boolean = {
    return i == reverseInt(i)
  }
  
  def find_palindrome(value: Int){
    var i = 0
    var new_value = value
    while(!palindrome(new_value)){
      new_value = reverse_add(new_value)
      i += 1
    }
    println(i + " " + new_value)
  }
  
  def main(args: Array[String]){
    val f = fromFile(args(0))
    val str = f.mkString
    var lines = str.split("\n")
    f.close
    lines.foreach((line: String) => find_palindrome(line.toInt))
  }
}
