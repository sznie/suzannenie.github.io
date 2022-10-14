## M1 Mac Numpy Optimization

[stackoverflow link](https://stackoverflow.com/questions/69848969/how-to-build-numpy-from-source-linked-to-apple-accelerate-framework/69869531#69869531)

1. Use a new virtual environment
2. Download the source for the latest version of numpy from [Github](https://github.com/numpy/numpy)
3. cd into numpy-1.xx.x folder
3. Create a blank file named site.cfg
4. Add these lines to site.cfg
```
[accelerate]
libraries = Accelerate, vecLib
```
5. Run `NPY_LAPACK_ORDER=accelerate python3 setup.py build`
6. Run `pip3 install .`
7. Run `np.show_config()` and check that `accelerate_info` is populated in the input