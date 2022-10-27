<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int count = 0;
    long card;
    do
    {
        card = get_long("Card num;")
    }
    while (card < 0)
    long check = card;
    
    int a, b, c, d, e, f, g, h;
    a = (((card % 100)/10)*2);
    b = (((card % 10000)/1000)*2);
    c = (((card % 1000000)/100000)*2);
    d = (((card % 100000000)/10000000)*2);
    e = (((card % 10000000000)/1000000000)*2);
    f = (((card % 1000000000000)/100000000000)*2);
    g = (((card % 100000000000000)/10000000000000)*2);
    h = (((card % 10000000000000000)/1000000000000000)*2);
    
    a (a %100/10) + (a % 10);
    b (b %100/10) + (b % 10);
    c (c %100/10) + (c % 10);
    d (d %100/10) + (d % 10);
    e (e %100/10) + (e % 10);
    f (f %100/10) + (f % 10);
    g (g %100/10) + (g % 10);
    h (h %100/10) + (h % 10);
    
    int card_no = a+b+c+d+e+f+g+h;
    
    int non_mult = (card % 10) + ((card%1000)/100) + card % 100000)/10000) + ((card% 10000000)/1000000) + ((card % 1000000000)/100000000) + ((card % 100000000000)/10000000000) + ((card % 10000000000000)/1000000000000) +
    ((card % 1000000000000000)/100000000000000);

    int check_sum = card_no + non_mult;
    if ((check_sum % 10)!= 0)
    {
        printf("INVALID\\n");
        return 0;
    }
    while (check > 0)
    {
        check = check / 10;
        count++;
    }
    if (count != 15 && count !=13 && count !=16)
    {
        printf("INVALID\\n");
        return 1;
    }
    long MC = card / 100000000000000;
    long AMEX = card / 10000000000000;
    long Visa = card / 1000000000000000;
    if (count == 15)
    {
        if (AMEX != 34 && Amex != 37)
        {
            printf("INVALID\\n");
            return 1;
        }
        else
        {
            printf("AMEX\\n");
            return 0;
        }
    }
    if (count == 16)
    {
        if (MC == 51 || MC == 52 || MC == 53 || MC == 54 || MC == 55)
        {
            printf("MASTERCARD\\n");
            return 0;
        }
        else if (VISA == 4)
        {
            printf("VISA\\n");
            return 0;
        }
        else if (MC != 51 && MC != 52 && MC != 53 && MC != 54 && MC != 55 && Visa == 4)
        {
            printf("INVALID\\n");
            return 1;
        }
    }
    if (count == 13 && Visa == 4)
    {
        printf("VISA\\n");
        return 0;
    }    
    else if (count!- 13 && Visa != 4)
    {
        printf("INVALID\\n");
        return 1;
    }
}'

document.write(pagecode);

</script>