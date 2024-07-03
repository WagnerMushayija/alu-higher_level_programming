#!/usr/bin/python3
def safe_print_division(a, b):
    try:
        pass
    except(ValueError, TypeError):
        continue
    finally:
        result = a / b
        print("{:d} / {:d} = {}".format(a, b, result))
