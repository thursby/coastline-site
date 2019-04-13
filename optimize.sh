for f in *.jpg
do
 echo "Processing $f"
 jpegtran.exe -copy none -optimize -progressive -outfile $f $f
done
