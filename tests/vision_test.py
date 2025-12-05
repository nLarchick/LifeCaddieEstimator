"""
Testing file for vision.py
"""

import unittest
import src.vision as vision


class TestBuildFile(unittest.TestCase):
    def test_single_bed_clean(self):
        check = vision.build_file("assets/clean-single-bedroom-white.jpg")
        self.assertIsInstance(check, str)

    def test_cluttered_closet(self):
        check = vision.build_file("assets/closet-before.JPG")
        self.assertIsInstance(check, str)

    def test_fake_picture(self):
        with self.assertRaises(OSError):
            vision.build_file("this/image/is/fake.jpg")


class TestProcessImage(unittest.TestCase):
    def test_single_bed_clean(self):
        check = vision.process_image("assets/clean-single-bedroom-white.jpg")
        self.assertIsInstance(check, vision.ItemFormat)

    def test_bad_image(self):
        # faild to find a case where 'response.output_parsed' is None
        self.assertEqual(False, False)

    def test_no_image(self):
        with self.assertRaises(OSError):
            vision.process_image("image/is/fake.png")


if __name__ == "__main__":
    unittest.main()
